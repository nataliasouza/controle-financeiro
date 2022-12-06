using ControleFinanceiro.BLL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ControleFinanceiro.DAL.Mapping
{
    public class DespesaMap : IEntityTypeConfiguration<Despesa>
    {
        public void Configure(EntityTypeBuilder<Despesa> builder)
        {
            builder.HasKey(d => d.Descricao);
            builder.Property(d => d.Descricao).IsRequired().HasMaxLength(50);

            builder.Property(d => d.Valor).IsRequired();
            builder.Property(d => d.Dia).IsRequired();
            builder.Property(d => d.Ano).IsRequired();

            builder.HasOne(d => d.Cartao).WithMany(d => d.Despesas).HasForeignKey(d => d.DespesaId).IsRequired();
            builder.HasOne(d => d.Categoria).WithMany(d => d.Despesas).HasForeignKey(d => d.DespesaId).IsRequired();
            builder.HasOne(d => d.Mes).WithMany(d => d.Despesas).HasForeignKey(d => d.MesId).IsRequired();
            builder.HasOne(d => d.Usuario).WithMany(d => d.Despesas).HasForeignKey(d => d.UsuarioId).IsRequired();

            builder.ToTable("Despesas");
        }
    }
}
