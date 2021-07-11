export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-ready Microservices",
      author: "Susan J.Fowler",
      price: 32,
      coverImage: "",
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nyfe",
      price: 45,
      coverImage: "{ logo }",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
