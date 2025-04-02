export const UpdateBookApi = async ({ bookId, role }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bookId === 1 && role === "admin") {
        resolve({
          success: true,
          data: {
            message: "BookName Updated",
            bookId
          },
        });
      } else {
        reject({
          success: false,
          error: "You don't have permission to perform this operation",
        });
      }
    }, 1000);
  });
};

const UpdateBook = async () => {
  try {
    const response = await UpdateBookApi({ bookId: 1, role: "admin" });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

UpdateBook();
