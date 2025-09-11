const CONTENT_PATH =
  "https://api.github.com/repos/prempritam888/portfolio-assets/contents";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Only POST allowed" });

  const token = process.env.GITHUB_TOKEN;
  const { content, path, commitMessage } = req.body;
  if (!token) return res.status(500).json({ message: "GitHub token not set" });

  try {
    const getResponse = await fetch(`${CONTENT_PATH}/${path}`, {
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
    });

    const getData = await getResponse.json();

    if (!getResponse.ok)
      return res.status(getResponse.status).json({ error: getData });

    const sha = getData.sha;

    //  Update the file
    const updateResponse = await fetch(`${CONTENT_PATH}/${path}`, {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: commitMessage || `Update ${path}`,
        content: content,
        sha: sha,
      }),
    });

    const updateData = await updateResponse.json();
    if (!updateResponse.ok)
      return res.status(updateResponse.status).json({ error: updateData });

    return res
      .status(200)
      .json({ message: "File replaced successfully", data: updateData });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
