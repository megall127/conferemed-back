import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Clinic from 'App/Models/Clinic'

export default class ClinicsController {

    public async create( {request}: HttpContextContract) {

        const user = new Clinic()

        user.name = request.input('name')
        user.local = request.input('local')
        user.cep = request.input('cep')

        await user.save()
    }


    public async getAllClinics({auth}: HttpContextContract) {

        const check = await auth.use('api').authenticate()

        if(check){
            return Clinic.all()
        } else {
            return "Nao Permitido"
        }
    }

}
