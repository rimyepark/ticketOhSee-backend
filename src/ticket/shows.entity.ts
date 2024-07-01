import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ schema: "ticket", name: "shows" })
export class Show {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column({ type: "varchar", length: 50 })
    title: string;

    @Column("int", { select: false })
    password: number;

    @Column({ type: "varchar", length: 100 })
    content: string;

    @Column({ type: "varchar", length: 50 })
    location: string;

    @Column({ type: "int" })
    age: number;

    @Column({ type: "int" })
    quantity: number;

    @Column({ type: "datetime" })
    start_time: Date;

    @Column({ type: "datetime" })
    end_time: Date;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date | null;
}