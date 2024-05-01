import app from './initFirebase.js'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from 'firebase/firestore'
import dayjs from 'dayjs'

const getMessages = function () {
  const db = getFirestore(app)

  const messagesContainer = document.querySelector('[data-messages]')

  const q = query(
    collection(db, 'messages'),
    orderBy('time', 'desc'),
    limit(20)
  )
  onSnapshot(q, (querySnapshot) => {
    const messages = []
    querySnapshot.forEach((doc) => {
      messages.push(doc.data())
    })
    messages.reverse()

    const messagesHTML = messages.map((message) => {
      return `<div class="message">
      <div class="message-time">${dayjs(message.time.toDate()).format(
        'HH:mm:ss'
      )}</div>
      <div class="message-user">${message.author}</div>
      <div class="message-text">${message.text}</div>
    </div>`
    })

    messagesContainer.innerHTML = messagesHTML.join('')
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  })
}

export default getMessages
