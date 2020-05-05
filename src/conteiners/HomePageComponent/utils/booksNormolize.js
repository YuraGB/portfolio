/**
 * Books
 *
 * @param books[]
 * @return books[]
 */
export default function (books) {
    return books
        .map( book => {
            return {
                id: book.id,
                imgLing: book.volumeInfo.imageLinks.thumbnail,
                description: book.volumeInfo.description,
                title: book.volumeInfo.title,
                date: book.publishedDate
            }
        })
}