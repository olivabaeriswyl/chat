import app from './initFirebase.js'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const sendMessage = function () {
  const db = getFirestore(app)

  // On sélectionne le formulaire
  const form = document.querySelector('[data-form]')

  // On écoute l'événement submit sur formulaire, pour envoyer un message
  form.addEventListener('submit', function (event) {
    // On empêche le formulaire de recharger la page
    event.preventDefault()

    // On récupère les champs du formulaire
    const authorField = form.querySelector('[name=author]')
    const textField = form.querySelector('[name=text]')

    // On envoie le message dans la base de données
    addDoc(collection(db, 'messages'), {
      author: authorField.value,
      text: textField.value,
      time: new Date(),
    })

    // On vide le champ de texte
    textField.value = ''
  })
}

export default sendMessage
