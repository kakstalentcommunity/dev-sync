const BASE_URL =
  "https://jsonplaceholder.typicode.com/todos";

export const fetchTasks =
  async () => {

    const response =
      await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error(
        "Unable to fetch tasks."
      );
    }

    return response.json();
};

export const createTask =
  async (task) => {

    const response =
      await fetch(BASE_URL, {

        method: "POST",

        headers: {
          "Content-Type":
          "application/json"
        },

        body: JSON.stringify(task)

      });

    if (!response.ok) {
      throw new Error(
        "Unable to create task."
      );
    }

    return response.json();
};
