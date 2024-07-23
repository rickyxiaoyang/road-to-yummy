type Methods = "GET" | "POST";

let token: string | undefined;

const baseHeaders: Record<string, string> = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
export class CMSClient {
  private async getToken(): Promise<string> {
    if (!token) {
      const response = await fetch(`${process.env.CMS_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: process.env.CMS_USERNAME,
          password: process.env.CMS_PASSWORD,
        }),
      });
      if (!response.ok) {
        throw new Error(`Failed to authenticate: ${response.statusText}`);
      }
      const json = (await response.json()) as { token: string };
      token = json.token;
    }
    return token;
  }
  async get<T>(
    url: string,
    headers: Record<string, string> = {},
    params: Record<string, string> = {}
  ): Promise<T> {
    const token = await this.getToken();
    const searchParams = new URLSearchParams(params);
    const fullUrl = new URL(
      `${process.env.CMS_URL}${url}${searchParams.toString()}`
    );
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        ...baseHeaders,
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data as T;
  }
}
