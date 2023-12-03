/* eslint-disable react/no-unescaped-entities */

import { RegisterContainer } from '../../../styles/pages/NewTask.module'
import Logo from '../../../components/Logo'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import MaskInput from '../../../components/MaskInput'
import Head from 'next/head'
import Select from '../../../components/Select'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import schema from '../../../schemas/register-task.schema'
import { useCreateTaskMutation } from '../../../graphql/generated/graphql'
import { withApollo } from '../../../lib/withApollo'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { formatDate } from '../../../utils/formatFormDate'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface CreateTask {
  title: string
  description: string
  date: string
  priority: string
}

function RegisterTask() {
  const router = useRouter()
  const [createTask] = useCreateTaskMutation()
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })

  async function handleCreateTask(data: CreateTask) {
    try {
      await createTask({
        variables: {
          createTaskInput: {
            title: data.title,
            description: data.description,
            date: formatDate(data.date),
            priority: data.priority,
          },
        },
      })
      toast.success('Tarefa cadastrada com sucesso!')
      router.push('/tarefas')
    } catch (error) {
      toast.error('Erro ao cadastrar tarefa!')
    }
  }
  return (
    <>
      <Head>
        <title>Olhar 180 - Cadastro de Tarefa</title>
      </Head>
      <RegisterContainer>
        <div className="content">
          <section>
            <Logo />
            <h1>Cadastro</h1>
            <p>
              Preencha o formulário com o título da tarefa, descrição detalhada,
              data de conclusão e selecione a prioridade entre alta, média ou
              baixa. Assim que finalizar, clique em "Salvar" para registrar a
              tarefa em sua lista.
            </p>
          </section>
          <form onSubmit={handleSubmit(handleCreateTask)}>
            <Input placeholder="Titulo" type="text" {...register('title')} />
            <Input
              placeholder="Descrição"
              type="text"
              {...register('description')}
            />
            <MaskInput
              placeholder="Data de conclusão"
              mask="99/99/9999 99:99"
              {...register('date')}
            />
            <Select
              placeholder="Prioridade"
              {...register('priority')}
              options={[
                { value: 'high', label: 'Alta' },
                { value: 'medium', label: 'Média' },
                { value: 'low', label: 'Baixa' },
              ]}
            />
            <Button type="submit">Cadastrar</Button>
          </form>
        </div>
      </RegisterContainer>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
})

export default withApollo(RegisterTask)
