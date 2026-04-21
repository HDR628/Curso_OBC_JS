const allUsers: GithubUserResponse[] = []// Iniciando vazio

/* Definindo Interface de usuario, as interfaces normalmente começam com letra maiscula */
interface GithubUserResponse{
    id: number
    login: string,
    name: string,
    bio: string,
    public_repos: number,
    repos_url: string,
}


interface GithubRepoResponse {
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
}


function findUser(login: string){
    /* let user = allUsers.find((user) => user.login === login)
    necessario padrozinar pra achar certinho o nome/login no github,case sensitive 
    */
    const normalized = login.trim().toLowerCase()
    return allUsers.find((user) => user.login.trim().toLowerCase() === normalized)
}

async function getUsernameLogin(login: string){
    const response = await fetch(`https://api.github.com/users/${login}`)

    if(!response.ok){
        console.log("Usuario nao encontrado")
    }else{
        const loginData = await response.json()
        allUsers.push(loginData)
    }
}


async function showRepos(login: string){
    let exist = findUser(login)

    if(!exist){
        console.log("Usuario não encontrado")
    }else{
        let response = await fetch(`https://api.github.com/users/${login}/repos`)
        let arrRepos : GithubRepoResponse[] = await response.json()
        console.log(arrRepos)
    }
}


/* async function main(){
    await  getUsernameLogin("hdr628")
    await showRepos("hdr628")
}

main() */