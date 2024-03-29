import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Proc extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clinica: string

  @column()
  public convenio: string

  @column()
  public nome_paciente: string

  @column()
  public nome_proc: string

  @column()
  public valor_repasse: number

  @column()
  public quantidade: number

  @column()
  public valor_auxiliar: number

  @column()
  public valor_proc: number

  @column()
  public stats_proc: number

  @column()
  public stats_pay: number

  @column()
  public date_proc: DateTime

  @column()
  public users_id: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
