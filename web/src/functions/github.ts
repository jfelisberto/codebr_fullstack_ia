export async function obterReadme(repoUrl: string) {
    const repository = repoUrl.split("github.com/")[1]
    const readmeUrl = `https://raw.githubusercontent.com/${repository}/main/README.md`
    // const readmeUrl = `https://github.com/jfelisberto/codebr_fullstack_ia/blob/portifolio/README.md`
    const response = await fetch(readmeUrl)

    return response.text()
}
