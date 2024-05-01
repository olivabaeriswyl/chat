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

const prepareMessage = function (message) {
  const formattedTime = dayjs(message.time.toDate()).format('HH:mm:ss')
  return `
  <div class="message">
    <div class="message-time">${formattedTime}</div>
    <div class="message-user">${message.author}</div>
    <div class="message-text">${message.text}</div>
  </div>`
}

const getMessages = function () {
  const messagesContainer = document.querySelector('[data-messages]')

  const db = getFirestore(app)
  const messagesQuery = query(
    collection(db, 'messages'),
    orderBy('time', 'desc'),
    limit(20)
  )

  onSnapshot(messagesQuery, (querySnapshot) => {
    const messages = []
    querySnapshot.forEach((doc) => {
      messages.push(doc.data())
    })
    messages.reverse()

    const messagesHTML = messages.map((message) => {
      return prepareMessage(message)
    })

    messagesContainer.innerHTML = messagesHTML.join('')
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  })
}

export default getMessages
