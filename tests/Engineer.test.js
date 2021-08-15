const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Creates an object with a name, id, email and github property', () => {
      const engineer = new Engineer("Joe", "1", "joe@gmail.com", "github.com/joesmith");
  
      expect(engineer.name).toBe("Joe");
      expect(engineer.id).toBe("1");
      expect(engineer.email).toBe("joe@gmail.com");
      expect(engineer.github).toBe("github.com/joesmith")
    });
    it('getGithub() function returns github', () => {
        const engineer = new Engineer("Joe", "1", "joe@gmail.com", "github.com/joesmith");
        expect(engineer.getGithub()).toBe("github.com/joesmith");
    });
    it('getRole() function returns "Engineer"', () => {
        const engineer = new Engineer("Joe", "1", "joe@gmail.com", "github.com/joesmith");
        expect(engineer.getRole()).toBe("Engineer");
    });
  });