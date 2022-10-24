import bcryptjs from "bcryptjs";

export async function hashPassword(
  password: string,
  saltRounds = 10
): Promise<string | null> {
  try {
    const salt = await bcryptjs.genSalt(saltRounds);

    return await bcryptjs.hash(password, salt);
  } catch (error) {
    console.log(error);
  }

  return null;
}

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  try {
    return await bcryptjs.compare(password, hash);
  } catch (error) {
    console.log(error);
  }

  return false;
}
