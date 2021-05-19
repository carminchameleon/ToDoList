export interface IToDo {
  /** 내용 */
  text: string;
  /** 완료 여부 */
  completed: boolean;
 
}

export type IToggleToDo = (selectedToDo :IToDo)  => void;