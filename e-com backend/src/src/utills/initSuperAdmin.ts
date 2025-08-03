import { Role } from '../entities/Roles';
import { User } from '../entities/User';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

export const initSuperAdmin = async () => {
  try {
    const name = process.env.SUPER_ADMIN_NAME || 'Default Admin';
    const email = process.env.SUPER_ADMIN_EMAIL || 'admin@example.com';
    const password = process.env.SUPER_ADMIN_PASSWORD || 'admin123';

    // 1. Check if the "superadmin" role exists
    let superAdminRole = await Role.findOne({
      where: { name: 'superadmin' },
    });

    if (!superAdminRole) {
      superAdminRole = Role.create({
        name: 'superadmin',
        isDefaultSuperAdmin: true,
      });
      await superAdminRole.save();
      console.log('✅ Superadmin role created.');
    }

    // 2. Check if a super admin user already exists
    const existingSuperAdmin = await User.findOne({
      where: { email },
      relations: ['roles'],
    });

    if (existingSuperAdmin) {
      const hasSuperAdminRole = existingSuperAdmin.roles.some(
        (role) => role.name === 'superadmin'
      );

      if (!hasSuperAdminRole) {
        existingSuperAdmin.roles.push(superAdminRole);
        await existingSuperAdmin.save();
        console.log('✅ Superadmin role added to existing user.');
      } else {
        console.log('ℹ️ Superadmin user already exists.');
      }

      return;
    }

    // 3. Create the superadmin user
    const hashedPassword = await bcrypt.hash(password, 10);

    const superAdminUser = User.create({
      name,
      email,
      password: hashedPassword,
      roles: [superAdminRole],
    });

    await superAdminUser.save();
    console.log('✅ Superadmin user created.');
  } catch (error) {
    console.error('❌ Error initializing superadmin:', error);
  }
};
