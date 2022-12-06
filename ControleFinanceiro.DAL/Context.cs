using ControleFinanceiro.BLL.Models;
using ControleFinanceiro.DAL.Mapping;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ControleFinanceiro.DAL
{
    public class Context : IdentityDbContext<Usuario, Funcao, string>
    {
        public DbSet<Cartao> Cartoes { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Despesa> Despesas { get; set; }
        public DbSet<Funcao> Funcoes { get; set; }
        public DbSet<Ganho> Ganhos { get; set; }
        public DbSet<Mes> Meses { get; set; }
        public DbSet<Tipo> Tipos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }

        public Context(DbContextOptions<Context> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfiguration(new CartaoMap());
            builder.ApplyConfiguration(new CategoriaMap());
            builder.ApplyConfiguration(new DespesaMap());
            builder.ApplyConfiguration(new FuncaoMap());
            builder.ApplyConfiguration(new GanhoMap());
            builder.ApplyConfiguration(new MesMap());
            builder.ApplyConfiguration(new TipoMap());
            builder.ApplyConfiguration(new UsuarioMap());
        }
    }
}
