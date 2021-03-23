import React, { useState } from 'react'
import options from './data'
import fillArray from './fillArray'

function App() {
  const subjectValues = fillArray([], options)
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [chapter, setChapter] = useState('')
  const reset = (sub, top) => {
    setSubject(sub)
    setTopic(top)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(subject, topic, chapter)
  }

  return (
    <main>
      <section className='section-center'>
        <form
          name='dropdown-example'
          id='dropdown-example'
          onSubmit={handleSubmit}
        >
          <label htmlFor='subject'>Subjects: </label>
          <select name='subject' id='subject' required>
            <option value='' onClick={() => reset('', '')}>
              Please, select a Subject
            </option>
            {subjectValues.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item}
                  onClick={() => reset(item, '')}
                >
                  {item}
                </option>
              )
            })}
          </select>
          <br />
          <label htmlFor='topic'>Topics: </label>
          <select name='topic' id='topic' required>
            <option value=''>Please, select a Topic</option>
            {subject &&
              fillArray([], options[subject]).map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item}
                    onClick={() => setTopic(item)}
                  >
                    {item}
                  </option>
                )
              })}
          </select>
          <br />
          <label htmlFor='chapter'>Chapters: </label>
          <select name='chapter' id='chapter' required>
            <option value=''>Please, select a Chapter</option>
            {topic &&
              options[subject][topic].map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item}
                    onClick={() => setChapter(item)}
                  >
                    {item}
                  </option>
                )
              })}
          </select>
          <br />
          <input type='submit' />
        </form>
      </section>
    </main>
  )
}

export default App
