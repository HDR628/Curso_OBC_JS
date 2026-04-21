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
        // let response = await fetch(`https://api.github.com/users/${login}/repos`)
        let response = await fetch (exist.repos_url)
        let arrRepos : GithubRepoResponse[] = await response.json()
        console.log(arrRepos)
    }
}


function listUsers(){
    if(allUsers.length === 0){
        console.log("Nenhum usuario salvo.")
        return
    }

    console.log("Usuarios salvos:")
    allUsers.forEach((user, index) => {
        console.log(`${index + 1}. ${user.login} (${user.name}) - ${user.public_repos} repos`)
    })
}


function calcRepos(){
    let total = 0 

    allUsers.forEach((user) =>
        total+= user.public_repos
    )

    console.log(total)
} 


function topFiveUser(){
    if(allUsers === undefined || allUsers.length < 1 ){
        console.log("Usuarios insuficientes...")
        return
    }else{
        let copyUser = [...allUsers] // copia do arr pra nao alterar o original
        let sorterCopy = copyUser.sort((a,b) => b.public_repos - a.public_repos).slice(0,5) // descendente e pega os 5 primeiros com mais repos publico
        console.log(sorterCopy)
    
        // exibição como pede o exercicio
        sorterCopy.forEach((user, index) => {
            console.log(`${index + 1}. ${user.login} - ${user.public_repos} repos`)
        })

        // let sortedArr = allUsers.sort((repoB,repoA) => repoB.public_repos - repoA.public_repos)
        // let topFive = sortedArr
        // let sliceFive = (topFive.slice(0,5))    

        // console.log(sliceFive)
    }
}


async function main() {
    await getUsernameLogin("hdr628")
    await getUsernameLogin("octocat")
    await getUsernameLogin("torvalds")
  
    listUsers()
    calcRepos()
    topFiveUser()
    await showRepos("hdr628")
  }
  
  main()