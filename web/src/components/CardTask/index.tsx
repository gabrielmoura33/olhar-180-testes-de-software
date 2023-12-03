import Image from 'next/image'

import React, { HTMLProps } from 'react'

import editIcon from '../../assets/icons/edit-24.svg'
import trashIcon from '../../assets/icons/trash-24.svg'
import checkIcon from '../../assets/icons/check-24.svg'

import { CardContainer } from './card-task.module'

export interface Task {
  id: string
  index: number
  title: string
  description: string
  priority: string
  isActive: boolean
  date: string
}
interface CardTaskProps extends HTMLProps<HTMLDivElement> {
  task: Task
  setModalVisible: () => void
  handleEditTask(id: string): void
  handleDeactivateTask(id: string): void
}

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})

const priorityMap = {
  low: 'Baixa',
  medium: 'Média',
  high: 'Alta',
}

function CardTask(props: CardTaskProps) {
  const { task, key, setModalVisible, handleEditTask, handleDeactivateTask } =
    props

  const formattedDate = dateFormatter.format(new Date(task.date))

  return (
    <CardContainer key={key} isActive={task.isActive}>
      <div className={`id column`}>{task.index}</div>
      <div className={`donators column`}>
        <span>Titulo</span>
        <h2>{task.title}</h2>
      </div>
      <div className={`amount column`}>
        <span>Descrição</span>
        <p>{task.description}</p>
      </div>
      <div className="deadline column">
        <span>Data</span>
        <p>{formattedDate}</p>
      </div>
      <div className={`amount column`}>
        <span>Prioridade</span>
        <p>{priorityMap[task.priority]}</p>
      </div>
      <div className={`amount column`}>
        <span>Situação</span>
        <p>{task.isActive ? 'Pendente' : 'Concluida'}</p>
      </div>

      <div className={`actions column flex`}>
        <button
          className={`btn white edit`}
          title="Concluir tarefa"
          type="button"
          onClick={() => handleDeactivateTask(task.id)}
        >
          <Image src={checkIcon} width={20} alt="Concluir tarefa" />
        </button>
        <a
          className={`btn white edit`}
          title="Editar tarefa"
          onClick={() => handleEditTask(task.id)}
        >
          <Image src={editIcon} alt="Editar tarefa" />
        </a>
        <button
          className={`btn white edit`}
          title="Excluir tarefa"
          type="button"
          onClick={setModalVisible}
        >
          <Image src={trashIcon} alt="Excluir tarefa" />
        </button>
      </div>
    </CardContainer>
  )
}

export default CardTask
