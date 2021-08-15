const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Creates an object with a name, id and email property', () => {
      const employee = new Employee("Joe", "1", "joe@gmail.com");
  
      expect(employee.name).toBe("Joe");
      expect(employee.id).toBe("1");
      expect(employee.email).toBe("joe@gmail.com");
    });
    it('Has functioning getName(), getId(), getEmail() and getRole() methods', () => {
        const employee = new Employee("Joe", "1", "joe@gmail.com");
    
        expect(employee.getName()).toBe("Joe");
        expect(employee.getId()).toBe("1");
        expect(employee.getEmail()).toBe("joe@gmail.com");
        expect(employee.getRole()).toBe("Employee");
      });
  });