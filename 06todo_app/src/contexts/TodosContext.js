import { useContext, createContext } from "react";

export const TodosContext = createContext({
    handleSubmit : () => {},
    handleCompleted : () => {},
    handleEdit : () => {},
    handleDelete : () => {},
})

export const TodosProvider = TodosContext.Provider;

export function useTodos() {
    return useContext(TodosContext);
}