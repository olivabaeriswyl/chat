import app from './initFirebase.js'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const sendMessage = function () {
  const db = getFirestore(app)
  const form = document.querySelector('[data-form]')

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    const authorField = form.querySelector('[name=author]')
    const textField = form.querySelector('[name=text]')

    addDoc(collection(db, 'messages'), {
      author: authorField.value,
      text: textField.value,
      time: new Date(),
    })

    textField.value = ''
  })
}

export default sendMessage
