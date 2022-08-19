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
        proc.valor_auxiliar = request.input('valor_auxiliar')
        proc.users_id = <number>auth.user?.id
        
        await proc.save()
    } else {
        return "Nao deu"
    }}


}
