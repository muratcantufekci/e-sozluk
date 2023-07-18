export const getWords =  async (lang, word) => {
    return fetch(`https://turksoz.com/api?endpoint=searchWord&language=${lang}&word=${word}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=utf-8 ' },
      }).then(response => response.json());
}