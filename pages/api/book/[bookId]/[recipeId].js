import { firestore } from 'firebase/admin'

export default (req, res) => {
  const { query } = req
  const { bookId, recipeId } = query

  firestore
    .collection('cookbooks')
    .doc(`${bookId}`)
    .collection('recipes')
    .doc(`${recipeId}`)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      res.json({
        ...data,
        id,
        createdAt: +createdAt.toDate()
      })
    })
    .catch(() => {
      res.status(404).end()
    })
}

export const config = {
  api: {
    externalResolver: true,
  },
}
