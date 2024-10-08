import {defineField, defineType} from 'sanity'

export const pessoaType = defineType({
  name: 'pessoa',
  title: 'Pessoa',
  type: 'document',
  fields: [
    defineField({
        name: 'id',
        type: 'number',
      }),
    
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
        name: 'dataNascimento',
        type: 'date',
      }),
    
    defineField({
        name: 'email',
        type: 'string',
      }),  
    
    defineField({
        name: 'telefone',
        type: 'string',
      }),  

    defineField({
        name: 'imagemPerfil',
        type: 'image',
      }), 
    
    defineField({
        name: 'ativo',
        type: 'boolean',
      }),   

    defineField({
        name: 'endereco',
        type: 'endereco',
      }),  
  ],
})