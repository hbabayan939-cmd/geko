import React from 'react'
import StudentCard from './components/StudentCard/StudentCard'
import StudentList from './components/StudentList/StudentList'
import StudentForm from './components/StudentForm/StudentForm'

const App = () => {
  return (
    <div>
      <StudentCard name = "Hayko" age={22} profession="Frontend" />
      <StudentForm onAddStudent={(newStudent) => console.log("New student added:", newStudent)} />
      <StudentList students={[{id: 1, name: "Hayko", age: 22, profession: "Frontend", color: "blue"}]} onDelete={(id) => console.log("Student deleted with id:", id)} />
    </div>
  )
}

export default App