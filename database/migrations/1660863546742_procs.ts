import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'procs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('users_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('clinica')
      table.string('convenio')
      table.string('nome_paciente')
      table.string('nome_proc')
      table.bigint('valor_repasse')
      table.mediumint('quantidade')
      table.bigint('valor_auxiliar')
      table.date('date_proc')
      table.bigint('valor_proc')
      table.smallint('stats_proc')
      table.smallint('stats_pay')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
