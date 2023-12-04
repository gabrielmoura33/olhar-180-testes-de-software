import { User as UserDomain } from '@application/users/entities/users.entity';
import { User } from '@prisma/client';
import { PrismaUsersMapper } from './prisma-users.mapper';

describe('PrismaUsersMapper', () => {
  describe('toDomain', () => {
    it('should correctly map a User to a UserDomain', () => {
      // Mock de um objeto User do prisma
      const mockUser: User = {
        id: '123',
        authUserId: 'authUser123',
        createdAt: new Date('2023-12-04'),
        updatedAt: new Date('2023-12-04')
      };

      const result = PrismaUsersMapper.toDomain(mockUser);

      expect(result).toEqual({
        id: mockUser.id,
        authUserId: mockUser.authUserId,
      });
    });
  });
});
