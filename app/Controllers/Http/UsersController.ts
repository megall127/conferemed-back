import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Proc from 'App/Models/Proc'
import User from 'App/Models/User'

export default class UsersController {
    public async create( {request}: HttpContextContract) {

        const user = new User()

        user.email = request.input('email')
        user.password = request.input('password')
        user.name = request.input('name')
        user.tell = request.input('tell')
        user.crm = request.input('crm')
        user.cidade = request.input('cidade')
        user.cpf = request.input('cpf')
        user.especialit = request.input('especialit')
        user.aux = request.input('aux')    

        await user.save()

        return user
    }

    public async login({auth, request, response}:HttpContextContract) {

        const email = request.input('email')
        const password = request.input('password')
        
        
        try {
        const token = await auth.use('api').attempt(email, password)
          return {
            token: token,
            user: auth.user
          }
        } catch {
          return response.unauthorized('Invalid credentials')
        }
    }

    public async takeDocDados({ auth, request } : HttpContextContract){

        const check = await auth.use('api').authenticate()

        const user = await User.findBy('id', request.input('id'))

        let procFilter:any = []

        const procFound = (await Proc.all()).map((itens) => {
            if(itens.users_id === user?.id){
                procFilter.push(itens)
            } else {
                
            }
        })

        if(check){
            return {
                data: {
                    doctor: user,
                    proc: procFilter
                }
               
            }
        } else {
            return "Usuário não autenticado."
        }   
    }


    public async checkRoute({auth} : HttpContextContract) {

        const check = await auth.use('api').authenticate()
        
        if(check){
            return 1    
        } else {
            return 2
        }

    }

    public async getAllDoctors({auth}: HttpContextContract){


        const check = await auth.use('api').authenticate()


        if(check){
            return User.all()
        } else {
            return 'Falhou'
        }
    }

    public async deleteUser( {auth, request }){

        const user = await User.findOrFail(request.input("id"))

        try {   
            await auth.check()
             
            await user?.delete()

            return{
                message: "Excluido com Sucesso!",
            }
        } catch (error) {
            return{
                message: "Falhou"
            }
        }
    }

    public async editDados( {auth, request }){

        const user = await User.findOrFail(request.input("id"))

        const newName = request.input("newName")
        const newEmail = request.input("newEmail")
        const newTelefone = request.input("newTelefone")
        const newEspc = request.input("newEspc")


        const checkValue = (newValue: any, value: any) => {
            if(newValue === null){
                return value
            } else {
                return newValue
            }
        } 

        try {   
            await auth.check()
            user.name = checkValue(newName, user.name);  
            user.email = checkValue(newEmail, user.email);
            user.tell = checkValue(newTelefone, user.tell);
            user.especialit = checkValue(newEspc,  user.especialit);
 

            await user?.save()

            return{
                message: "Editado com Sucesso!",
                data: {
                    name: newName,
                    email: newEmail,
                    tell: newTelefone,
                    espc: newEspc
                }
            }
        } catch (error) {
            return{
                message: "Falhou"
            }
        }
    }
}
