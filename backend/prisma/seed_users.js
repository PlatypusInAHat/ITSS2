const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding 10 random users...');

  const password = await bcrypt.hash('password123', 10);

  const userData = [
    { name: 'Anh Tuấn', email: 'tuan@example.com' },
    { name: 'Minh Hoàng', email: 'hoang@example.com' },
    { name: 'Thị Lan', email: 'lan@example.com' },
    { name: 'Văn Hùng', email: 'hung@example.com' },
    { name: 'Ngọc Mai', email: 'mai@example.com' },
    { name: 'Bảo Long', email: 'long@example.com' },
    { name: 'Thanh Hà', email: 'ha@example.com' },
    { name: 'Quốc Anh', email: 'anh@example.com' },
    { name: 'Diệu Linh', email: 'linh@example.com' },
    { name: 'Đức Thành', email: 'thanh@example.com' },
  ];

  for (const u of userData) {
    try {
      await prisma.user.upsert({
        where: { email: u.email },
        update: {},
        create: {
          name: u.name,
          email: u.email,
          password: password,
        },
      });
      console.log(`✅ Created user: ${u.name} (${u.email})`);
    } catch (err) {
      console.error(`❌ Failed to create user ${u.email}:`, err.message);
    }
  }

  console.log('✅ Done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
