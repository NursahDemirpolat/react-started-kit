import { useState ,useReducer,useCallback,useMemo, useEffect} from 'react';

function App() {

  // const genders = ['Erkek','Kadın']
  const genders = [
    {key : '1', value:'Erkek'},
    {key : '2', value:'Kadın'}
  ]

  const categoryList = [
    {key: 1 , value:'PHP'},
    {key: 2 , value:'Javascript'},
    {key: 3 , value:'CSS'},
    {key: 4 , value:'HTML'},
  ]

  const levels = [
    { key: 'beginner' , value:'Başlangıç'},
    { key: 'jr_developer' , value:'JR. developer'},
    { key: 'sr_developer' , value:'SR. developer'}
  ]

  const [name,setName] = useState('tayfun')
  const [description,setDescription] = useState('')
  const [gender,setGender] = useState('1')
  const [categories,setCategories] = useState([2,4])
  const [rule,setRule] = useState(true)
  const [level,setLevel] = useState('jr_developer')
  const [avatar,setAvatar] = useState(false)
  const [image,setImage] = useState(false)

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load',function() {
        setImage(this.result)
      })
      fileReader.readAsDataURL(avatar)
    }
  },[avatar])
  
  // const selectedGender = useMemo(() => {
  //   return genders[gender]
  // }, [gender] )

  const selectedGender = genders.find( g => g.key === gender)
  const selectedLevels = levels.find ( l => l.key === level)
  const selectedCategories = categories && categoryList.filter(c => categories.includes(c.key))

  return(
    <>
      <button onClick={() => setName('ahmet')}>Add Değiştir</button>
      <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
      <br/>
      {name}
      <br/>
      <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
      <br/>
      {description} 
      <br/>
      <select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">Secin</option>
        {genders.map((gender) => (
            <option value={gender.key} key={gender.key}>{gender.value}</option>
        ))}
      </select>
      <br/>
      <pre>{JSON.stringify(selectedGender,null,2)}</pre>
      <br/>
      <button onClick={() => setCategories([2,3,4])}> Kategorileri Seç </button>
      <br/>
      <select value={categories} multiple={true} onChange={ e => setCategories([...e.target.selectedOptions].map(option => +option.value))}>
        {categoryList.map(category => (
          <option value={category.key} key={category.key}>{category.value}</option>
        ))}
      </select>
      <br/>
      <pre>{JSON.stringify(selectedCategories,null,2)}</pre>
      <br/>
      <label>
        <input type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)}/>
        Kuralları kabul ediyorum
      </label>
      <br/>
      <button disabled={!rule}>Devam et</button>
      <br/>
      <pre>{JSON.stringify(selectedCategories,null,2)}</pre>
      <br/>
      {levels.map((l,index) => (
          <label key={index}>
            <input type="radio" value={l.key} checked={l.key === level} onChange={e => setLevel(e.target.value)}/>
            {l.value}
          </label>
      ))}
      <br/>
      <pre>{JSON.stringify(selectedLevels , null , 2)}</pre>
      <br/>
      <label> 
        <input type='file' onChange={e => setAvatar(e.target.files)}/>
      </label>
      <br/>
      { avatar && (
        <>
          <h3>{avatar.name}</h3>
          {image && <img src={image} alt=""/>}
        </>
      )}
    </> 
  )
}
export default App;
