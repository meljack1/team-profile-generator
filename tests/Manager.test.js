const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Creates an object with a name, id, email and officeNumber property', () => {
      const manager = new Manager("Joe", "1", "joe@gmail.com", "60");
  
      expect(manager.name).toBe("Joe");
      expect(manager.id).toBe("1");
      expect(manager.email).toBe("joe@gmail.com");
      expect(manager.officeNumber).toBe("60")
    });
    it('getOfficeNumber() function returns office number', () => {
        const manager = new Manager("Joe", "1", "joe@gmail.com", "60");
        expect(manager.getOfficeNumber()).toBe("60");
    });
    it('getRole() function returns "Manager"', () => {
        const manager = new Manager("Joe", "1", "joe@gmail.com", "60");
        expect(manager.getRole()).toBe("Manager");
    });
  });