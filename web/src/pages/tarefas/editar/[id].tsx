/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from 'react-toastify'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Logo from '../../../components/Logo'
import MaskInput from '../../../components/MaskInput'
import Select from '../../../components/Select'
import { RegisterContainer } from '../../../styles/pages/NewTask.module'
// import { formatDate } from '../../../utils/formatFormDate'
import Head from 'next/head'
import schema from '../../../schemas/register-task.schema'
import { Loading } from '../../../components/Loading'
import { useRouter } from 'next/router'
import { withApollo } from '../../../lib/withApollo'
import { useGetTaskById } from '../../../graphql/generated/page'
import { useEffect } from 'react'
import { useUpdateTaskMutation } from '../../../graphql/generated/graphql'
import { formatDate, formatDateString } from '../../../utils/formatFormDate'

interface EditTask {
  title: string
  description: string
  date: string
  priority: string
}

function EditTaskPage() {
  const router = useRouter()
  const { id } = useRouter().query
  const [editTask] = useUpdateTaskMutation()
  const { data, loading } = useGetTaskById(() => {
    return { variables: { id: id as string } }
  })

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (!data?.getTaskById) return

    reset({
      title: data?.getTaskById.title,
      description: data?.getTaskById.description,
      priority: data?.getTaskById.priority,
      date: formatDateString(data?.getTaskById.date),
    })
  }, [data?.getTaskById, reset])

  async function handleEditTask(data: EditTask) {
    try {
      await editTask({
        variables: {
          id: id as string,
          updateTaskInput: {
            id: id as string,
            title: data.title,
            description: data.description,
            date: formatDate(data.date),
            priority: data.priority,
          },
        },
      })
      toast.success('Tarefa editada com sucesso!')
      router.push('/tarefas')
    } catch (error) {
      console.log(error)
      toast.error('Erro ao editar tarefa!')
    }
  }

  return (
    <>
      <Head>
        <title>Olhar 180 - Edição de Tarefa</title>
      </Head>
      {loading && <Loading />}
      <RegisterContainer>
        <div className="content">
          <section>
            <Logo />
            <h1>Edição</h1>
            <p>
              Edite os detalhes da tarefa como título, descrição, data de
              conclusão e prioridade. Clique em "Salvar" para finalizar a
              edição.
            </p>
          </section>
          <form onSubmit={handleSubmit(handleEditTask)}>
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
            <Button type="submit">Editar</Button>
          </form>
        </div>
      </RegisterContainer>
    </>
  )
}

export default withApollo(EditTaskPage)
