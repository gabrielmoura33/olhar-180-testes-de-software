/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import plusIcon from '../../assets/icons/plus-24.svg'
import logoImg from '../../assets/logo-m-secondary.svg'
import userImage from '../../assets/images/default-user.png'
import { DeleteModal } from '../../components/DeleteModal'
import { Loading } from '../../components/Loading'
import CardTask from '../../components/CardTask'
import {
  AvatarProfile,
  Button,
  Container,
  Header,
  Info,
} from '../../styles/pages/TaskListPage.module'
import { withApollo } from '../../lib/withApollo'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useGetAllActiveTasks } from '../../graphql/generated/page'
import { useRouter } from 'next/router'
import {
  useDeactivateTaskMutation,
  useDeleteTaskMutation,
} from '../../graphql/generated/graphql'
import { toast } from 'react-toastify'

function TasksListPage() {
  const { user } = useUser()
  const { data, loading, refetch } = useGetAllActiveTasks()
  const [deleteTaskMutation] = useDeleteTaskMutation()
  const [deactivateTaskMutation] = useDeactivateTaskMutation()
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const { getActiveTasks: tasks } = data || {}
  const router = useRouter()

  const [modalVisible, setModalVisible] = useState(false)

  async function handleDeleteEntry() {
    try {
      deleteTaskMutation({
        variables: {
          id: deleteId,
        },
      })

      toast.success('Tarefa deletada com sucesso')
      setModalVisible(false)
      refetch()
    } catch (error) {
      console.log(error)
      toast.error('Erro ao deletar tarefa')
    }
  }

  function handleEditTask(id: string) {
    router.push(`/tarefas/editar/${id}`)
  }

  async function handleDeactivateTask(id: string) {
    try {
      deactivateTaskMutation({
        variables: {
          id,
        },
      })

      toast.success('Tarefa concluida com sucesso')
      setModalVisible(false)
      refetch()
    } catch (error) {
      console.log(error)
      toast.error('Erro ao concluir tarefa')
    }
  }

  return (
    <>
      <DeleteModal
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleDelete={() => handleDeleteEntry()}
      ></DeleteModal>

      <Head>
        <title>Olhar 180 - Teste técnico</title>
      </Head>

      {loading && <Loading />}
      <Header>
        <div className="container">
          <section className="animate-up z-15">
            <Image width={189} src={logoImg} alt="Olhar 180" id="logo" />
            <AvatarProfile className={`relative`}>
              <p>
                {user?.name} <span>Ver perfil</span>
              </p>
              <Image
                src={user?.picture || userImage}
                width={64}
                height={64}
                alt="Perfil do usuário"
              />
            </AvatarProfile>
          </section>

          <section
            className="animate-up delay-1"
            style={{ marginTop: '2rem', marginBottom: '2rem' }}
          >
            <Info>
              <div>
                <strong>{tasks?.length}</strong>
                Tarefas ao total
              </div>
            </Info>

            <Button
              className="white"
              onClick={() => router.push('/tarefas/cadastrar')}
            >
              <span>
                <Image src={plusIcon} alt="Nova tarefa" />
              </span>
              Adicionar Tarefa
            </Button>
          </section>
        </div>
      </Header>
      <Container className={'container'}>
        <main className="animate-up delay-2">
          <div>
            {tasks?.map((task, index) => (
              <CardTask
                key={task.id}
                task={{ ...task, index: index + 1 }}
                setModalVisible={() => {
                  setDeleteId(task.id)
                  setModalVisible(true)
                }}
                handleEditTask={handleEditTask}
                handleDeactivateTask={handleDeactivateTask}
              />
            ))}
          </div>
        </main>
      </Container>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
})

export default withApollo(TasksListPage)
