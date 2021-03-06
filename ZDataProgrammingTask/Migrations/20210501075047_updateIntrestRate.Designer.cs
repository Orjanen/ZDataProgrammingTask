// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ZDataProgrammingTask.Data;

namespace ZDataProgrammingTask.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210501075047_updateIntrestRate")]
    partial class updateIntrestRate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.5");

            modelBuilder.Entity("ZDataProgrammingTask.Models.LoanType", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<float>("InterestRate")
                        .HasColumnType("REAL");

                    b.Property<string>("LoanName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("LoanTypes");
                });
#pragma warning restore 612, 618
        }
    }
}
