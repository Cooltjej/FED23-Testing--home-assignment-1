import { it, describe, expect, beforeEach, afterEach } from "vitest";
import { addTodo, toggleTodo, deleteTodo } from "../functions";
import { Result } from "../types/Result";
import { Todo } from "../types/Todo";


let todoItems: Todo[];




describe('adding a new todo', () => {
    beforeEach(() => {
      todoItems = [];
    });
  
    afterEach(() => {
      todoItems = [];
    });
  
    it("should add a new todo", () => {
      const result: Result = addTodo("New Todo", todoItems);
      expect(todoItems).toHaveLength(1);
      expect(result.success).toBe(true);
    });
  
    it("shouldn't add a todo with an empty title", () => {
      const result: Result = addTodo("", todoItems);
      expect(todoItems).toHaveLength(0);
      expect(result.success).toBe(false); 
      expect(result.error).toBe("Title cannot be empty");
    });
  
    it("shouldn't add a todo with a title less than 3 characters", () => {
      const result: Result = addTodo("xy", todoItems); 
      expect(todoItems).toHaveLength(0);
      expect(result.success).toBe(false); 
      expect(result.error).toBe("Title must be at least 3 characters long");
    });
});
  



  describe("toggling a todo", () => {
    beforeEach(() => {
      todoItems = [{ 
        id: 1, 
        title: "Current Todo", 
        completed: false 
    }];
});
  
    afterEach(() => {
      todoItems = [{ 
        id: 1, 
        title: "Current Todo", 
        completed: false 
    }];
});
  
    it("should toggle a todo", () => {
      const result: Result = toggleTodo(1, todoItems); 
      expect(todoItems[0].completed).toBe(true);
      expect(result.success).toBe(true);
    });
  
    it("shouldn't toggle a todo that doesn't exist", () => {
      const result: Result = toggleTodo(2, todoItems);
      expect(todoItems[0].completed).toBe(false);
      expect(result.success).toBe(false);
      expect(result.error).toBe("Todo not found");
    });
  });
  



  describe("deleting a todo", () => {
    beforeEach(() => {
      todoItems = [{ 
        id: 1, 
        title: "Current Todo", 
        completed: false 
    }];
});
  
    afterEach(() => {
      todoItems = [{ 
        id: 1, 
        title: "Current Todo", 
        completed: false 
    }];
});
  
    it("should delete a todo", () => {
      const result: Result = deleteTodo(1, todoItems);
      expect(todoItems).toHaveLength(0);
      expect(result.success).toBe(true);
    });
  
    it("shouldn't delete a todo that doesn't exist", () => {
      const result: Result = deleteTodo(2, todoItems);
      expect(todoItems).toHaveLength(1);
      expect(result.success).toBe(false);
      expect(result.error).toBe("Todo not found");
    });
  });




















/**
 * add todo
should add a todo (3)
should not add a todo with empty title (3)
should not add a todo with title shorter than 3 characters (3)

toggle todo
should toggle a todo (2)
should not toggle a todo that does not exist (2)

delete todo
should delete a todo (2)
should not delete a todo that does not exist (2)
 */