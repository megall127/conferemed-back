import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Proc from "App/Models/Proc"
import User from 'App/Models/User';


export default class ProcsController {


    public async create( {request, response, auth}: HttpContextContract) {

    const proc = new Proc();

    const check = await auth.use('api').authenticate()

    if(check){
        proc.clinica = request.input('clinica')
        proc.convenio = request.input('convenio')
        proc.nome_paciente = request.input('nome_paciente')
        proc.nome_proc = request.input('nome_proc')
        proc.valor_repasse = request.input('valor_repasse')
        proc.quantidade = request.input('quantidade')
        proc.valor_auxiliar = request.input('valor_auxiliar')
        proc.valor_proc = request.input('valor_proc')
        proc.stats_proc = request.input('stats_proc')
        proc.stats_pay = request.input('stats_pay')
        proc.date_proc = request.input('date_proc')
        proc.users_id = request.input('id')
        
        await proc.save()
    } else {
        return "Nao deu"
    }}


    public async editDados( {auth, request, response }){

        const proc = await Proc.findOrFail(request.input("id"))

        const newStats = request.input("newStats")
        const newPayment = request.input("newPayment")


        const checkValue = (newValue: any, value: any) => {
            if(newValue === null){
                return value
            } else {
                return newValue
            }
        } 

        try {   
            await auth.check()
            proc.stats_proc = checkValue(newStats, proc.stats_proc);  
            proc.stats_pay = checkValue(newPayment, proc.stats_pay);  
            await proc?.save()

            return{
                message: "Editado com Sucesso!",
                data: newStats
            }
        } catch (error) {
            return{
                message: "Falhou"
            }
        }
    }


}
