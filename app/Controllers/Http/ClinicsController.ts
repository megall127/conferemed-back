import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Clinic from 'App/Models/Clinic'

export default class ClinicsController {

    public async create( {request, response}: HttpContextContract) {

        const user = new Clinic()

        user.name = request.input('name')
        user.local = request.input('local')
        user.cep = request.input('cep')

        await user.save()
    }


}
