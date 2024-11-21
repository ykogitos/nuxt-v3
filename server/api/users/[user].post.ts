export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, "user") as string;
  const formData = await readFormData(event);

  interface IResult {
    error: boolean;
    errorMessage: string;
    insertId: number;
    [key: string]: any;
  }

  const result: IResult = {
    error: false,
    errorMessage: "",
    insertId: -1,
  };

  formData.append("username", username.toLowerCase());

  let cols: string[] = [];
  let values: string[] = [];
  let placeholder: string[] = [];

  formData.forEach((v, k: string) => {
    cols.push(k);
    values.push(v as string);
    placeholder.push("?");
    result[k] = v;
  });

  let query = "INSERT INTO";
  query += " users";
  query += " (" + cols.join(", ") + ")";
  query += " VALUES";
  query += " (" + placeholder.join(", ") + ")";

  let data;

  data = await event.context.$conn
    .query(query, values)
    .then((res: any) => {
      result.insertId = Number(res.insertId);
    })
    .catch((err: Error) => {
      result.error = true;
      result.errorMessage = err.name;
    });

  return result;
});
