namespace NOVOPJ.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Entity : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Prato",
                c => new
                    {
                        id_prato = c.Int(nullable: false, identity: true),
                        nome_prato = c.String(),
                        preco_prato = c.Decimal(nullable: false, precision: 18, scale: 2),
                        id_restaurante = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.id_prato)
                .ForeignKey("dbo.Restaurante", t => t.id_restaurante, cascadeDelete: true)
                .Index(t => t.id_restaurante);
            
            CreateTable(
                "dbo.Restaurante",
                c => new
                    {
                        id_restaurante = c.Int(nullable: false, identity: true),
                        nome_restaurante = c.String(),
                        Restaurante_id_restaurante = c.Int(),
                    })
                .PrimaryKey(t => t.id_restaurante)
                .ForeignKey("dbo.Restaurante", t => t.Restaurante_id_restaurante)
                .Index(t => t.Restaurante_id_restaurante);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Prato", "id_restaurante", "dbo.Restaurante");
            DropForeignKey("dbo.Restaurante", "Restaurante_id_restaurante", "dbo.Restaurante");
            DropIndex("dbo.Restaurante", new[] { "Restaurante_id_restaurante" });
            DropIndex("dbo.Prato", new[] { "id_restaurante" });
            DropTable("dbo.Restaurante");
            DropTable("dbo.Prato");
        }
    }
}
