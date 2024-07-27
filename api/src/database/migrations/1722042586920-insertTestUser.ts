import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertTestUser1722042586920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        INSERT INTO 
          users (id, name, email, password)
        VALUES
          ('b38e28a7-31c8-4dc5-b556-498b35ada9b0', 'João', 'joao@ilumeo.com', '$2a$08$6/qdLGJIdHsvpf4tHiu37.VkLf3WnRXBwbKyZkO0kevq77O2dRI/.');
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM users WHERE id = b38e28a7-31c8-4dc5-b556-498b35ada9b0;
    `);
  }
}
