namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    
    getRequirements () : string {
      return 'Here is the list of requirements for Cpp'
    }

    getAvailableTeacher () : string {
      if (this.teacher.experienceTeachingReact === 0) {
        return 'No available teacher';
      } else {
        return 'Available teacher: ' + this.teacher.firstName;
      }
    }
  }
}
