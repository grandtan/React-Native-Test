export interface TemplatesDetails {
  id: number
  type: string
  text: string
  question_type: string
  order: number
  compulsory: boolean
  question_options: QuestionOption[]
  children: Children[]
}

export interface QuestionOption {
  id: number
  template_question_id: number
  label: string
}

export interface Children {
  id: number
  type: string
  value: string
  order: number
  template_question_id: number
  condition: string
  question_logic_option: QuestionLogicOption
  children: Children2[]
}

export interface QuestionLogicOption {
  text: string
  expression_value: string
  question_type: string
}

export interface Children2 {
  id: number
  type: string
  name?: string
  order: number
  children: Children3[]
  text?: string
  question_type?: string
  compulsory?: boolean
  question_options: any
}

export interface Children3 {
  id: number
  type: string
  text?: string
  question_type?: string
  order: number
  compulsory?: boolean
  question_options: any
  children: Children4[]
  value?: string
  template_question_id?: number
  condition?: string
  question_logic_option?: QuestionLogicOption2
}

export interface Children4 {
  id: number
  type: string
  text: string
  question_type: string
  order: number
  compulsory?: boolean
  question_options: any
  children: any[]
}

export interface QuestionLogicOption2 {
  text: string
  expression_value: string
  question_type: string
}