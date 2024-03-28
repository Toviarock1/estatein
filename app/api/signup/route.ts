import db from "./../db";
export async function POST(req: Request) {
  // return Response.json("firstname");
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      phonenumber,
      country,
      role,
      city,
      state,
    } = await req.json();
    if (
      firstname &&
      lastname &&
      email &&
      password &&
      phonenumber &&
      country &&
      state &&
      city
    ) {
      try {
        const createAccount = await db.query(
          "INSERT INTO users (firstname, lasttname, email, password, phone_number, country, state, city,role) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
          [
            firstname,
            lastname,
            email,
            password,
            phonenumber,
            country,
            state,
            city,
            "user",
          ]
        );

        return Response.json({
          status: "success",
          ...createAccount,
        });
      } catch (error: any) {
        if (error.detail === `Key (email)=(${email}) already exists.`) {
          return Response.json(
            {
              status: "failed",
              message: "User already exist",
            },
            { status: 200 }
          );
        } else {
          console.log(error.message);
          return Response.json(error, { status: 400 });
        }
      }
    } else {
      return Response.json({
        status: "success",
      });
    }
  } catch (err: any) {
    console.log(err.message);
    return Response.json(
      {
        status: "failed",
        message: "Invalid request: expected json data for user",
      },
      { status: 400 }
    );
  }
}
