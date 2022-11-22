import { Page } from '~/domain/models/page'
import { ProjectReadItem, ProjectType } from '~/domain/models/project/project'

export class ProjectDTO {
  id: number
  name: string
  description: string
  guideline: string
  projectType: ProjectType
  createdAt: string
  updatedAt: string
  author: string
  enableRandomOrder: boolean
  enableShareAnnotation: boolean
  singleClassClassification: boolean
  tags: Object[] | string[]
  canDefineLabel: boolean
  canDefineRelation: boolean
  canDefineCategory: boolean
  isTextProject: boolean
  allowOverlapping: boolean
  graphemeMode: boolean
  hasCategory: boolean
  hasSpan: boolean
  taskNames: string[]
  useRelation: boolean

  constructor(item: ProjectReadItem) {
    this.id = item.id
    this.name = item.name
    this.description = item.description
    this.guideline = item.guideline
    this.projectType = item.projectType
    this.createdAt = item.createdAt
    this.updatedAt = item.updatedAt
    this.author = item.author
    this.enableRandomOrder = item.randomOrder
    this.enableShareAnnotation = item.collaborativeAnnotation
    this.singleClassClassification = item.exclusiveCategories
    this.tags = item.tags
    this.canDefineLabel = item.canDefineLabel
    this.canDefineRelation = item.canDefineRelation
    this.canDefineCategory = item.canDefineCategory
    this.isTextProject = item.isTextProject
    this.allowOverlapping = item.allowOverlapping
    this.graphemeMode = item.graphemeMode
    this.hasCategory = item.canDefineCategory
    this.hasSpan = item.canDefineSpan
    this.taskNames = item.taskNames
    this.useRelation = item.useRelation
  }
}

export type ProjectWriteDTO = Pick<
  ProjectDTO,
  | 'id'
  | 'name'
  | 'description'
  | 'guideline'
  | 'projectType'
  | 'enableRandomOrder'
  | 'enableShareAnnotation'
  | 'singleClassClassification'
  | 'allowOverlapping'
  | 'graphemeMode'
  | 'useRelation'
> & { tags: string[] }

export class ProjectListDTO {
  count: number
  next: string | null
  prev: string | null
  items: ProjectDTO[]

  constructor(item: Page<ProjectReadItem>) {
    this.count = item.count
    this.next = item.next
    this.prev = item.prev
    this.items = item.items.map((_) => new ProjectDTO(_))
  }
}

export interface SearchQueryData {
  limit: string
  offset: string
  q?: string
  sortBy?: string
  sortDesc?: string
}
