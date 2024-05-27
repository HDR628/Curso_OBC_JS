function group() {
    console.log('Export nomeado não-inline (agrupado)')
  }
  
  function a(){
    console.log(`A`)
  }

  function exportDefault() {
    console.log('Export default não-inline')
  }
  
  export { group,a }
  
  export default exportDefault